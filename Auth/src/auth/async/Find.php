<?php

namespace auth\async;

use auth\AuthManager;
use auth\Main;
use auth\UserEntity;
use pocketmine\player\Player;
use pocketmine\scheduler\AsyncTask;
use pocketmine\Server;
use stdClass;
use Throwable;

class Find extends AsyncTask
{

  public function __construct(
    private UserEntity $user,
    private string $action = 'byName' | 'byEmail',
    private string $router = 'http://localhost:3333/find-user'
  ) {
  }

  function onRun(): void
  {

    $payload = array(
      "nick: {$this->user->name}",
      "email: {$this->user->email}",
      "action: {$this->action}",      
    );

    try {

      $curl = curl_init($this->router);
      curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");
      curl_setopt($curl, CURLOPT_POSTFIELDS, $payload);
      curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($curl, CURLOPT_HTTPHEADER, $payload);


      $result = curl_exec($curl);

      /** @var stdClass */
      $std = json_decode($result);

      $this->setResult($std);
      print_r([
        $std
      ]);
    } catch (Throwable $th) {
    }
  }

  function onCompletion(): void
  {
    $server = Server::getInstance();
    $player = $server->getPlayerExact($this->user->name);
    if ($player instanceof Player) {

      $authManager = new AuthManager($player, $server);

      if (!$this->getResult()->success) {
        $authManager->notRegister();
      } else {
        $user = new UserEntity(
          $this->getResult()->user->name,
          $this->getResult()->user->email,
          $this->getResult()->user->password,
        );
        $authManager->prelogged($user);
      }
    }
  }
}
