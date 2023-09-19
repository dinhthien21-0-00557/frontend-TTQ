<?php
function directory($img,$title){
    $directory="
    <a href=''>
        <div>
            <span class='img-directory'>
                <img src='./assets/img/$img' alt=''>
             </span>
            <span class='t-c'>
                $title
            </span>
        </div>
    </a>     
    ";
    return $directory;
}
