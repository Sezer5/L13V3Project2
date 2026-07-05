<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        return ProductResource::collection(
            Product::with(['colors','sizes'])->latest()->get()
        )->additional([
            'colors' => Color::has('products')->latest()->get(),
            'sizes' => Size::has('products')->latest()->get()
        ]);
    }

    public function getProductWithColor(Color $color){
        return ProductResource::collection(
            $color->products()->with(['colors','sizes'])->latest()->get()
        )->additional([
            'colors' => Color::has('products')->latest()->get(),
            'sizes' => Size::has('products')->latest()->get()
        ]);
    }

    public function getProductWithSize(Size $size){
        return ProductResource::collection(
            $size->products()->with(['colors','sizes'])->latest()->get()
        )->additional([
            'colors' => Color::has('products')->latest()->get(),
            'sizes' => Size::has('products')->latest()->get()
        ]);
    }

    public function productDetail(Product $product){
        if(!$product){
            abort(404);
        }
        return ProductResource::make(
            $product->with(['colors','sizes'])->latest()->get()
        )->additional([
            'colors' => Color::has('products')->latest()->get(),
            'sizes' => Size::has('products')->latest()->get()
        ]);
    }

    public function getProductWithTerm($term){
        return ProductResource::collection(
            Product::where('slug','LIKE','%'.$term.'%')->with(['colors','sizes'])->latest()->get()
        )->additional([
            'colors' => Color::has('products')->latest()->get(),
            'sizes' => Size::has('products')->latest()->get()
        ]);
    }
}
