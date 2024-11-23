let slideIndex = 1; //Inisialisasi Slide "slideIndex"
        showSlides(slideIndex); //Menampilkan Slide Pertama maka img Slide-1.jpeg akan tampil dahulu
        
        // Mengubah nilai (n) slide dengan increment untuk menampilkan slide berikutnya
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        
        //  Function untuk menampilkan img Slide sesuai dengan nilai n
        function showSlides(n) {
            let i;
            // Ngambil semua elemen dari mySlides
            let slides = document.getElementsByClassName("mySlides");
            // Mastiin bahwa "slideIndex" tetap dalam batasan jumlah slide yakni 6 Slide
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}

            // Menyembunyikan Slide lainnya
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            // Menampilkan slide sesuai dengan nilai "slideIndex" atau current slide atau slide yang akan ditampilkan saat ini
            slides[slideIndex-1].style.display = "block";  
        }
        
        // Otomatis Sliding dengan waktu yang ditentukan
        setInterval(function() {
            plusSlides(1);
        }, 5000); // Image akan slide setiap 5 detik