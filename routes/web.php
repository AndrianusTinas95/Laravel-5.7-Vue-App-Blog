<?php


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
Route::view('/test', 'layouts.master');
Route::get('/home', 'HomeController@index')->name('home');
Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => 'web'], function () {
    Route::resource('article', 'ArticleController');
    Route::resource('category', 'CategoryController');
});

Route::get('lang/{lg}', function ($lang = null) {
    // dd($lang);
    app()->setLocale($lang);
    app()->getLocale();
    return view('welcome');
});