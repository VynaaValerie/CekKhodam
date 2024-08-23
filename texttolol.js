function cekTolol() {
    const nama = document.getElementById("nama").value.trim();
    const loadingElement = document.getElementById("loading");
    const resultElement = document.getElementById("result");

    if (nama === "") {
        alert("Masukkan nama dulu dong!");
        return;
    }

    // Tampilkan loading dan sembunyikan hasil
    loadingElement.style.display = "block";
    resultElement.innerText = "";

    // Simulasikan waktu tunggu untuk loading
    setTimeout(() => {
        const tololPercentage = Math.floor(Math.random() * 100) + 1;
        let resultText = "";

        if (tololPercentage < 5) {
            resultText = `${tololPercentage}% - Kamu ini jenius, otakmu berlian!`;
        } else if (tololPercentage < 10) {
            resultText = `${tololPercentage}% - Kamu pintar luar biasa, semua orang iri padamu!`;
        } else if (tololPercentage < 15) {
            resultText = `${tololPercentage}% - Wah, kamu cerdas banget!`;
        } else if (tololPercentage < 20) {
            resultText = `${tololPercentage}% - Kamu nggak tolol, tapi nggak juga genius, tetap aja luar biasa!`;
        } else if (tololPercentage < 25) {
            resultText = `${tololPercentage}% - Kamu cukup cerdas, nggak ada yang perlu dikhawatirkan!`;
        } else if (tololPercentage < 30) {
            resultText = `${tololPercentage}% - Kamu lumayan cerdas, mungkin hanya sedikit meleng!`;
        } else if (tololPercentage < 35) {
            resultText = `${tololPercentage}% - Kamu hanya sedikit tolol, bisa terjadi pada siapa saja!`;
        } else if (tololPercentage < 40) {
            resultText = `${tololPercentage}% - Nggak terlalu tolol, tapi tetap harus waspada!`;
        } else if (tololPercentage < 45) {
            resultText = `${tololPercentage}% - Lumayan tolol, tapi masih dalam batas yang wajar, santai aja!`;
        } else if (tololPercentage < 50) {
            resultText = `${tololPercentage}% - Tolol dikit nggak apa-apa, manusiawi kok!`;
        } else if (tololPercentage < 55) {
            resultText = `${tololPercentage}% - Hmm, mulai ada tanda-tanda tolol nih.`;
        } else if (tololPercentage < 60) {
            resultText = `${tololPercentage}% - Waduh, kamu mulai masuk zona tolol! Hati-hati ya!`;
        } else if (tololPercentage < 65) {
            resultText = `${tololPercentage}% - Kamu lumayan tolol, mungkin kurang tidur?`;
        } else if (tololPercentage < 70) {
            resultText = `${tololPercentage}% - Agak tolol nih, mungkin lagi nggak fokus atau gimana?`;
        } else if (tololPercentage < 75) {
            resultText = `${tololPercentage}% - Aduh, kamu ini udah masuk kategori tolol lumayan berat!`;
        } else if (tololPercentage < 80) {
            resultText = `${tololPercentage}% - Kamu beneran tolol, tapi masih bisa ditoleransi kok!`;
        } else if (tololPercentage < 85) {
            resultText = `${tololPercentage}% - Tolol banget nih, sebaiknya lebih hati-hati dalam bertindak!`;
        } else if (tololPercentage < 90) {
            resultText = `${tololPercentage}% - Aduh, kamu tolol banget! Mending jangan ambil keputusan penting hari ini.`;
        } else if (tololPercentage < 95) {
            resultText = `${tololPercentage}% - OMG! Kamu hampir mencapai level tolol maksimal!`;
        } else {
            resultText = `${tololPercentage}% - Kamu tolol maksimal! Mungkin hari ini bukan hari terbaikmu.`;
        }

        // Sembunyikan loading dan tampilkan hasil
        loadingElement.style.display = "none";
        resultElement.innerText = resultText;
    }, 2000); // Simulasikan loading selama 2 detik
}
