  function introduction(name) {
    return  `Hi, my name is ${name}.`
    console.log(introduction("john"));
  }
  function introductionWithLanguage(name, language) {
   return `Hi, my name is ${name} and I am learning to program in ${language}.`
   console.log(introductionWithLanguage("Marshall", "Recoded"));
  }
  function introductionWithLanguageOptional(name, language= "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
    console.log(introductionWithLanguage("Marshall", "JavaAcript"));
  }