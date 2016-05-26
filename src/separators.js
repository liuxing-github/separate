
function separate(str)
{
    var tab = str.indexOf(".");
    
    while(tab === -1)
    {
        tab = str.length;
    }
    var number = str.substring(0,tab);
    var result = number.substring(0, number.length % 3);
    if(number.length % 3 === 0)
    {
        for (var i = number.length % 3; i < number.length; i = i + 3)
        {
            result = result + number.substring(i, i + 3) + ",";
        }
            result = result.substring(0,result.length-1);
    }
    else
    {
        for (var j = number.length % 3; j < number.length; j = j + 3)
        {
            result = result + ',' + number.substring(j, j + 3);
        }
    }
    result = result + str.substring(tab,str.length);

    return result;
}

function thousands_separators(num)
{
    var finalResult;
    var string = num.toString();
    finalResult =separate(string);
    return finalResult;
}

module.exports = thousands_separators;
