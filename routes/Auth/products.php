<?php

use Illuminate\Support\Facades\Route;

Route::get('/products', function () { return view('main.index');});
Route::get('/products/{id}/show', function () { return view('main.index');});