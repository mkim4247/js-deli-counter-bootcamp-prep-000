function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
	if (line.length > 0) {
		return `Currently serving ${line.shift(0)}.`
	}
	if (line.length === 0) {
		return "There is nobody waiting to be served!"
	}
}

function currentLine(line) {
   if (line.length>0) {
     var deli = []
     for (var i = 0; i < line.length; i++) {
       deli.push(` ${i+1}. ${line[i]}`);
     }
     return `The line is currently:${deli}`;
   }
   if (line.length === 0) {
     return "The line is currently empty."
     }
}