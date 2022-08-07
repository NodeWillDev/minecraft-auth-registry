<?php

namespace auth\events;

use auth\AuthManager;
use pocketmine\event\Listener;
use pocketmine\event\player\PlayerChatEvent;
use pocketmine\Server;

class Chat implements Listener
{

  public function __construct(
    private Server $server
  ) {
  }

  function onChat(PlayerChatEvent $event)
  {

    $player = $event->getPlayer();
    
    if (AuthManager::inPreLogged($player->getName())) {
      $authManager = new AuthManager($player, $this->server);
      $event->cancel();
      $authManager->auth($event->getMessage());
    }
  }
}
