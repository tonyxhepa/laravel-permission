<?php

namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
      public function index()
    {
        
      return view('blog.index',[
         'posts'=>Post::orderBy('updated_at', 'desc')->paginate(10)
      ]);
    }
    public function show($id)
    {
        //dd($slug);
        // exit();
        return view('blog.show', [
            'post' => Post::findOrFail($id)
        ]);
    }
    public function create($value='')
    {
        $title=":Create New Blog";
       return view('blog.create',[
           'title'=>$title,
       ]);
    }

    
}
