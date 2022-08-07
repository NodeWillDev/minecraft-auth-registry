<?php

namespace auth;

class UserEntity
{
  public function __construct(
    public string $name,
    public string $email,
    public string $password,
  ) {
  }
}
