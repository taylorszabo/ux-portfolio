<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = [
        'title','slug','excerpt','tags','cover_image','body',
    ];
    protected $casts = ['tags' => 'array'];
}
