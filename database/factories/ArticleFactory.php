<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Article::class, function (Faker $faker) {
    $title=$faker->sentence(rand(4,9),true);
    return [
        'title'     =>$title,
        'content'   =>$faker->paragraph(rand(1,3),true),
        'url'       =>str_replace(' ','-',$title),
        'view'      =>0,
        'cover'     =>'articles/template.png',
    ];
});
