const calculateTemp = () => {

    const temp = document.getElementById('temp').value;
    // console.log(temp);

    const tempselected = document.getElementById('tempdiff');
    const valuetemp = tempdiff.options[tempselected.selectedIndex].value;
    // console.log(valuetemp);

    const celtofah = (cel) => {
        let farhren = Math.round((cel *9/5)+32);
        return farhren;
    }
    const fahtocel = (fah) => {
        let celcius = Math.round((fah -32)*5/9);
        return celcius;
    }

    let result;

    if(valuetemp == 'cel'){
        const result = celtofah(temp);
        document.getElementById('result').innerHTML = `= ${result} Fahrenheit`
    }
    else{
        const result = fahtocel(temp);
        document.getElementById('result').innerHTML = `= ${result} Celcius`
    }


}