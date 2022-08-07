<?php

namespace auth;

use pocketmine\player\Player;
use pocketmine\scheduler\Task;

class AuthTask extends Task
{
  public function __construct(
    private Player $player,
    private int $time,
    private Main $main,
    private bool $logged = false
  ) {
  }

  function onRun(): void
  {
    if ($this->player->isConnected()) {      
      if (AuthManager::inPreLogged($this->player->getName())) {

        $this->time--;

        if (!$this->logged)
          $this->notLogged();

        else
          $this->preLogged();
      }
    } else {
      $this->getHandler()->remove();
    }
  }


  private function notLogged()
  {
    $this->player->sendPopup($this->main->getConfigProvider()->formatMessageTimePopup($this->time, 'not-player-database-popup'));
    $this->endTimeKickMessage($this->main->getConfigProvider()->getData('not-player-database-kick'));    
  }

  private function preLogged()
  {
    $this->player->sendPopup($this->main->getConfigProvider()->formatMessageTimePopup($this->time, 'user-time-to-logged-popup'));
    $this->endTimeKickMessage($this->main->getConfigProvider()->getData('user-prelogged-message-kick'));
  }

  private function endTimeKickMessage(string $kick_message)
  {
    if ($this->time <= 0) {
      $this->player->kick($kick_message);
      $this->getHandler()->remove();
    }
  }
}
