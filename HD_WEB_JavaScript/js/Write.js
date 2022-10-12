window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        let SCT = window.scrollY;
        SCT > 0
            ? document.querySelector('.Header').classList.add('on')
            : document.querySelector('.Header').classList.remove('on');
        SCT > 600
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on');
    });


    // 파일 업로드 시, 해당 이미지로 전환
    const fileInput = document.getElementById("ex_file");

    const handleFiles = (e) => {
    const selectedFile = [...fileInput.files];
    const fileReader = new FileReader();
    
    fileReader.readAsDataURL(selectedFile[0]);
    
    fileReader.onload = function () {
        document.getElementById("previewImg").src = fileReader.result;
    };
    };
    
    fileInput.addEventListener("change", handleFiles);

    // // 파일 업로드 시, 파일명 변환... 자스로 바꿔보자 
    // document.getElementById('file_name').textContent = null;  //기존 파일 이름 지우기
});

//textarea 바이트 수 체크하는 함수
function fn_checkByte(obj){
    const maxByte = 3000; //최대 3,000바이트
    const text_val = obj.value; //입력한 문자
    const text_len = text_val.length; //입력한 문자수
    
    let totalByte=0;
    for(let i=0; i<text_len; i++){
        const each_char = text_val.charAt(i);
        const uni_char = escape(each_char); //유니코드 형식으로 변환
        if(uni_char.length>4){
            // 한글 : 2Byte
            totalByte += 2;
        }else{
            // 영문,숫자,특수문자 : 1Byte
            totalByte += 1;
        }
    }
    
    if(totalByte>maxByte){
        alert('최대 3,00Byte까지만 입력가능합니다.');
            document.getElementById("nowByte").innerText = totalByte;
            document.getElementById("nowByte").style.color = "red";
        }else{
            document.getElementById("nowByte").innerText = totalByte;
            document.getElementById("nowByte").style.color = "green";
        }
}






