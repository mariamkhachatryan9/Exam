// 5.Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

function reverseString(str) {
    return str.split('.').reverse().join('.');
  }
  console.log(reverseString("i.like.this.program.very.much"));