<?php

use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\User::class,2)->create()->each(function($user){
            $user->articles()->saveMany(factory(App\Models\Article::class,5)->create()->each(function($article){
                $article->categories()->saveMany(factory(App\Models\Category::class,rand(1,3))->make());
            }))->make();
        });
    }
}
