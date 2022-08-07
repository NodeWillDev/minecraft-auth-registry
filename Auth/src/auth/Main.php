<?php

namespace auth;

use auth\events\Chat;
use auth\events\Join;
use auth\provider\ConfigProvider;
use pocketmine\player\Player;
use pocketmine\plugin\PluginBase;

class Main extends PluginBase
{

  public static self $instance;  

  function onEnable(): void
  {
    self::$instance = $this;
    $this->getServer()->getPluginManager()->registerEvents(new Join($this->getServer()), $this);
    $this->getServer()->getPluginManager()->registerEvents(new Chat($this->getServer()), $this);
  }

  static function getInstance()
  {
    return self::$instance;
  }

  function getConfigProvider(): ConfigProvider
  {
    return new ConfigProvider($this);
  }  
}
