<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VehicleController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::group(['prefix' => 'vehicles'], function () {
    Route::get("", [VehicleController::class, 'all']);
    Route::match (['get'], '/', [VehicleController::class, 'all']);
    Route::match (['post'], 'simulate', [VehicleController::class, 'simulate']);
    Route::match (['get'], '{vehicleId}', [VehicleController::class, 'find']);
    // Route::get("{vehicleId}", 'VehicleController@find');
});