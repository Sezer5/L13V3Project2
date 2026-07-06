<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::get('/products', [ProductController::class, "index"]);
Route::get('/products/{color}/color', [ProductController::class, "getProductWithColor"]);
Route::get('/products/{size}/size', [ProductController::class, "getProductWithSize"]);
Route::get('/products/{product}/productdetail', [ProductController::class, "productDetail"]);
Route::get('/products/{term}/term', [ProductController::class, "getProductWithTerm"]);
