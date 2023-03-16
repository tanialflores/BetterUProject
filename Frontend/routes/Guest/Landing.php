<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () { return view('main.index');});
Route::get('/downloadApp', function () { return view('main.index');});
Route::get('/hosts', function () {  return view('main.index');});
Route::get('/hosts/register', function () {  return view('main.index');});
Route::get('/blog', function () {  return view('main.index');});
Route::get('/blog/{id}/show', function () {  return view('main.index');});
Route::get('/contact', function () {  return view('main.index');}); 
Route::get('/terms-conditions', function () {  return view('main.index');}); 
Route::get('/politics-privacy', function () {  return view('main.index');});
Route::get('/start', function () {  return view('main.index');});

Route::get('/login', function () {  return view('main.index');}); 
Route::get('/recover-account', function () {  return view('main.index');}); 
Route::get('/recover-code', function () {  return view('main.index');});
Route::get('/update-access', function () {  return view('main.index');}); 
Route::get('/register', function () {  return view('main.index');}); 
Route::get('/register-code', function () {  return view('main.index');});
Route::get('/register-info', function () {  return view('main.index');});
Route::get('/termin-and-conditions', function () {  return view('main.index');});
Route::get('/welcome-user', function () {  return view('main.index');});
