angular.module('methodCommentSurveyApp', [])
  .controller('QuestionController', ['$scope', function($scope) {

    $scope.question = '"Ruft einen Wert ab, der einem TextEffect-Zeichenindex einen TextSource-Zeichenindex zuordnet."';

    $scope.answers = [];
    $scope.readyToStart = function() {
      return $scope.answers.length == 0
    };

    $scope.showAnswers = function() {
      $scope.answers = [
        {text:'GetTextEffectCharacterIndexFromTextSourceCharacterIndex', correct:true},
        {text:'Get_Text_Effect_Memberwise_Clone_Index_For_Unloaded_Exception_Stack_Trace', correct:false},
        {text:'Get_Text_Effect_Character_Index_From_Text_Source_Character_Index', correct:false},
        {text:'gettexteffectcharacterindexfromtextsourcecharacterindex', correct:false},
        {text:'GetTextEffectMemberwiseCloneIndexForUnloadedExceptionStackTrace', correct:false}
      ];
    };
 
    $scope.answerClick = function(answer) {
      $scope.answers = [];      
    };

  }]);