<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = ['photo', 'city', 'brand', 'model', 'description', 'year', 'gearbox', 'phone', 'price'];

    public function inputs($object)
    {
        return [
            'photo' => $object->photo,
            'city' => $object->city,
            'brand' => $object->brand,
            'model' => $object->model,
            'description' => $object->description,
            'year' => $object->year,
            'gearbox' => $object->gearbox,
            'phone' => $object->phone,
            'price' => $object->price,
        ];
    }

    public function attributes()
    {
        return [
            'photo' => 'Foto do carro',
            'city' => 'Cidade',
            'brand' => 'Marca',
            'model' => 'Modelo',
            'description' => 'Descrição',
            'year' => 'Ano',
            'gearbox' => 'Cambio',
            'phone' => 'Telefone',
            'price' => 'Preço',
        ];
    }

    public function rules($id = 0)
    {
        return [
            'photo' => 'required',
            'city' => 'required',
            'brand' => 'required',
            'model' => 'required',
            'description' => 'required',
            'year' => 'required',
            'gearbox' => 'required',
            'phone' => 'required',
            'price' => 'required',
        ];
    }

    public function log()
    {
        // TODO: Implement log() method.
    }


    



}
