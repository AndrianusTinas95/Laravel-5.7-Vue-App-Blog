<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = ['title', 'content', 'url', 'view', 'cover', 'status'];

    public function author()
    {
        return $this->belongsTo(User::class, 'author');
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'articles_categories', 'articles_id', 'categories_id');
    }
}
