<?php

namespace auth\provider;

use auth\Main;
use pocketmine\utils\Config;

class ConfigProvider
{

  private static Config $config;

  public function __construct(private Main $main)
  {
    @mkdir($main->getDataFolder());
    self::$config = new Config($main->getDataFolder() . 'config.yml', Config::YAML, array(
      'for-faction-server-save-position[optional]' => true,
      'kick-time' => 60,
      'find-user-router' => 'http://localhost:3333/find-user',
      'not-player-database-message' => '§cYou are not registered in our network',
      'not-player-database-kick' => '§cYou are not registered in our network §3register on our website §ahttp://localhost:3000',
      'not-player-database-popup' => '§3register on our website §ahttp://localhost:3000 §c[{time}]',
      'not-player-database-effect' => true,
      'user-prelogged-message' => '§ePut your password in chat',
      'user-time-to-logged-popup' => '§e{time} second',
      'user-prelogged-message-kick' => '§cYou took too long to authenticate',
      'user-prelogged-teleport-world' => 'world',
      'user-prelogged-title-success' => array(
        'title' => '§l§a{player}',
        'subtitle' => '§fWelcome {player}'
      ),
    ));
  }

  function getData(string $data): string
  {
    return self::$config->getAll()[$data];
  }

  function formatMessageTimePopup(int $time, string $data): string
  {
    $data = self::$config->getAll()[$data];
    $data = str_replace(
      ['{time}'],
      [
        $time
      ],
      $data
    );

    return $data;
  }

  function formatMessageTitle(string $name, string $data): string
  {
    $data = self::$config->getAll()['user-prelogged-title-success'][$data];
    $data = str_replace(
      ['{player}'],
      [
        $name
      ],
      $data
    );

    return $data;
  }
}
