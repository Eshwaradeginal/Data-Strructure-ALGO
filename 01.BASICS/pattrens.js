

function pattern1(n) {
    for (let ol = 0; ol < n; ol++) {
        let line = '';
        for (let i = 0; i < n; i++) {
            line += '* ';
        }
        console.log(line);
    }
}


function pattern2(n) {
    for (let ol = 0; ol <=n; ol++) {
        let line = '';
        for (let i = 0; i < ol; i++) {
            line += '* ';
        }
        console.log(line);
    }
}

function pattern3(n) {
    for (let ol = 1; ol <=n; ol++) {
        let line = '';
        for (let i = 1; i < ol; i++) {
            line += i+" ";
        }
        console.log(line);
    }
}

function pattern4(n) {
    for (let ol = 0; ol <=n; ol++) {
        let line = '';
        for (let i = 0; i < ol; i++) {
            line += ol+" ";
        }
        console.log(line);
    }
}

function pattern5(n) {
    for (let ol = 0; ol <=n; ol++) {
        let line = '';
        for (let i = 0; i < n-ol+1; i++) {
            line += i+" ";
        }
        console.log(line);
    }
}

function pattern6(n) {
    for (let ol = 0; ol <=n; ol++) {
        let line = '';
        for (let i = 0; i <= n-ol-1; i++) {
            line += "* ";
        }
        console.log(line);
    }
}

pattern6(5)
//pattern5(5)
//pattern4(5)
//pattern3(5)
//pattern2(5)
//pattern1(5);
