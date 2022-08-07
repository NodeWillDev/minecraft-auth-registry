<?php

namespace auth\events;

use auth\async\Find;
use auth\Main;
use auth\UserEntity;
use pocketmine\event\Listener;
use pocketmine\event\player\PlayerJoinEvent;
use pocketmine\Server;

class Join implements Listener
{

  public function __construct(
    private Server $server
  ) {
  }

  function onJoin(PlayerJoinEvent $event)
  {
    $player = $event->getPlayer();
    $user = new UserEntity(
      $player->getName(),
      '',
      ''
    );

    $this->server->getAsyncPool()->submitTask(new Find(
      $user,
      'byNick',
      Main::getInstance()->getConfigProvider()->getData('find-user-router')
    ));
  }
}
