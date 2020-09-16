function ShowPage(page){
    var div=document.getElementById('halaman');
    var isi='';
    if(page==1){
        isi+="<h3>Artikel Pertama</h3>";
        isi+="<p>The quick brown fox jump over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";
        isi+="<h3>Artikel Kedua</h3>";
        isi+="<p>The quick brown fox jump over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";
        isi+="<h3>Artikel Ketiga</h3>";
        isi+="<p>The quick brown fox jump over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.";
    }
    else if(page==2){
        isi+="<img class='img-content' src='deepin1.jpg' alt='gambar'>";
        isi+="<img class='img-content' src='deepin1.jpg' alt='gambar'>";
    }
    else if(page==3){
        isi+="<table>"
        isi+="<tr>"
        isi+="<td><label>Username</label></td>";
        isi+="<td><input class='input' type='text' name='username' placeholder='Username Anda'></td><br>";
        isi+="</tr>"
        isi+="<tr>"
        isi+="<td><label>Password</label></td>";
        isi+="<td><input class='input' type='password' name='password' placeholder='Username Anda'></td><br>";
        isi+="</tr>";
        isi+="</table>";
        isi+="<input class='btn-login' type='submit' value='login'>";
    }
    div.innerHTML=isi;
}