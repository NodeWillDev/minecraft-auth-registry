<?php

namespace auth;

use pocketmine\entity\effect\Effect;
use pocketmine\entity\effect\EffectInstance;
use pocketmine\entity\effect\VanillaEffects;
use pocketmine\player\Player;
use pocketmine\Server;
use pocketmine\utils\Limits;
use pocketmine\world\Position;

class AuthManager
{

  private Main $main;

  /** @var Effect */
  static private $blindness;

  /** @var UserEntity[] */
  static private $preLogged = [];

  /** @var Position[] */
  static private $savePosition = [];

  public function __construct(
    private Player $player,
    private Server $server
  ) {

    $this->main = Main::getInstance();

    self::$blindness = VanillaEffects::BLINDNESS();

    if (empty(self::$preLogged[$player->getName()])) {
      self::$preLogged[$player->getName()] = false;

      self::$savePosition[$player->getName()] = false;
      if ($this->main->getConfigProvider()->getData('not-player-database-effect')) {

        $blindness = new EffectInstance(
          self::$blindness,
          Limits::INT32_MAX,
          2,
          false,
          false
        );
        $this->player->getEffects()->add($blindness);

        if ($this->main->getConfigProvider()->getData('for-faction-server-save-position[optional]')) {
          if (empty(self::$savePosition[$player->getName()]))
            self::$savePosition[$player->getName()] = $player->getPosition();
        }
      }
    }
  }

  function notRegister(): void
  {
    $this->player->sendMessage($this->main->getConfigProvider()->getData('not-player-database-message'));
    $this->main->getScheduler()->scheduleRepeatingTask(new AuthTask(
      $this->player,
      $this->main->getConfigProvider()->getData('kick-time'),
      $this->main,
      false
    ), 20);
    $this->loggedLobby();
  }

  function prelogged(UserEntity $user): void
  {
    $this->main->getScheduler()->scheduleRepeatingTask(new AuthTask(
      $this->player,
      $this->main->getConfigProvider()->getData('kick-time'),
      $this->main,
      true
    ), 20);

    self::$preLogged[$this->player->getName()] = $user;
    $this->player->getEffects()->remove(self::$blindness);
    $this->player->sendMessage($this->main->getConfigProvider()->getData('user-prelogged-message'));
    $this->loggedLobby();
  }

  /** @var password It is the message that the player will send in the chat */
  function auth(string $password): void
  {
    /** @var UserEntity */
    $user = self::$preLogged[$this->player->getName()];

    if ($user instanceof UserEntity) {
      if ($user->password == $password) {

        unset(self::$preLogged[$this->player->getName()]);
        $this->player->teleport(self::$savePosition[$this->player->getName()]);
        unset(self::$savePosition[$this->player->getName()]);
        $this->player->sendTitle(
          $this->main->getConfigProvider()->formatMessageTitle($this->player->getName(), 'title'),
          $this->main->getConfigProvider()->formatMessageTitle($this->player->getName(), 'subtitle'),
          40,
          0,
          40
        );
      }
    }
  }

  static function inPreLogged(string $name)
  {
    return isset(self::$preLogged[$name]);
  }

  private function loggedLobby()
  {
    $world = $this->main->getServer()->getWorldManager()->getWorldByName($this->main->getConfigProvider()->getData('user-prelogged-teleport-world'));
    $this->player->teleport($world->getSpawnLocation());
  }
}
