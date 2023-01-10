<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::select('id','name','barcode','description','manufacturer','category')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'barcode' => 'required',
            'description' => 'required',
            'manufacturer' => 'required',
            'category' => 'required'
        ]);

        Product::create($request->post());
        return response()->json([
            'message' => 'nowy przedmiot został dodany pomyślnie'
        ]);
    }

    public function show(Product $product)
    {
        return response()->json([
            'product' => $product
        ]);
    }


    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required',
            'barcode' => 'required',
            'description' => 'required',
            'manufacturer' => 'required',
            'category' => 'required'
        ]);

        $product->fill($request->post())->update();
        return response()->json([
            'message' => 'przedmiot został zaktualizowany pomyślnie'
        ]);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json([
            'message' => ' przedmiot został usunięty pomyślnie'
        ]);
    }
}
