<?php 

namespace frontend\controllers;

use yii\rest\ActiveController; 

class MessageController extends ActiveController
{
	public $modelClass = 'frontend\models\Message';

	public function behaviors()
	{
		return parent::behaviors();
	}

}