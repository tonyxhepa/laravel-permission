@extends('spica.admintheme')
@section('content')

            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Striped Table</h4>
                  <p class="card-description">
                    Add class <code>.table-striped</code>
                  </p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          
                           <th style="background: lightcyan;font-weight: bold; color: orange;">
                              Post Title
                          </th>

                          <th style="background: lightcyan;font-weight: bold; color: orange;">
                            View Post
                          </th>
                            <th style="background: lightcyan;font-weight: bold; color: orange;">
                             Edit 
                          </th>
                         <th style="background: lightcyan;font-weight: bold; color: orange;">
                           Delete
                         </th>
                         
                        </tr>
                      </thead>
                      <tbody>
@foreach($posts as $post)
   <tr>
                <td>
                                      
                  <a class="postbtn"  style="color: black;font-weight:bold;" href="{{ route('blog.show',$post->id) }}"> {{ $post->post_title }}
                  </a>
                 </td>
                       
                 <td>
                     <a class="btn btn-outline-primary btn-rounded  btn-fw"href="{{ route('blog.show',$post->id) }}"> Show
                     </a>
                       
                     </td>
                      <td>
                     <a class="btn btn-info btn-rounded btn-fw"href="{{ route('blog.show',$post->id) }}"> Edit
                     </a>
                       
                     </td>
                     <td>
                        <form action="" method="post"   class="btn btn-danger btn-rounded btn-fw">
                            @csrf
                            @method('delete')
                            <input type="submit" value="delete">

                        </form>
                     </td>
   @endforeach
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

@endsection