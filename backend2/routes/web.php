<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ColorController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SizeController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/login',[AdminController::class,"login"])->name('admin.login');
Route::post('/admin/auth',[AdminController::class,"auth"])->name('admin.auth');

Route::middleware('role:admin')->prefix('admin')->name('admin.')->group(function(){
    Route::get('index',[AdminController::class,"index"])->name('index');
    Route::get('logout',[AdminController::class,"logout"])->name('logout');

    // COLOR ROUTE IS HERE  COLOR ROUTE IS HERE  COLOR ROUTE IS HERE  COLOR ROUTE IS HERE 

    Route::resource('color',ColorController::class);

    // SİZE ROUTE IS HERE  SİZE ROUTE IS HERE  SİZE ROUTE IS HERE  SİZE ROUTE IS HERE 

    Route::resource('size',SizeController::class);

    // PRODUCT ROUTES IS HERE  PRODUCT ROUTES IS HERE  PRODUCT ROUTES IS HERE 

    Route::resource('product',ProductController::class);
});
