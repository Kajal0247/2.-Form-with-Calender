function Difference()
{
 let currentDate = new Date(document.getElementById("CurrentDate").value);
 let submissionDate = new Date(document.getElementById("SubmissionDate").value);
 let difference = submissionDate - currentDate;
 let cd = 24 * 60 * 60 * 1000,
        ch = 60 * 60 * 1000,
        d = Math.floor(difference / cd),
        h = Math.floor( (difference - d * cd) / ch),
        m = Math.round( (difference - d * cd - h * ch) / 60000),
        pad = function(n){ return n < 10 ? '0' + n : n; };
  if( m === 60 ){
    h++;
    m = 0;
  }
  if( h === 24 ){
    d++;
    h = 0;
  }
  document.getElementById("dateDiff").setAttribute("value", [d, pad(h), pad(m)].join(':'));
 
}
