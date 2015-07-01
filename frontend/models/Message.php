<?php 

namespace frontend\models;

use \yii\db\ActiveRecord;
use yii\behaviors\TimestampBehavior;

class Message extends ActiveRecord 
{
	public static function tableName()
	{
		return "{{%messages}}";
	}

	// public function behaviors()
 //    {
 //        return [
 //            'timestamp' => [
 //            	'class' => TimestampBehavior::className(),
 //            	'attributes' => [
 //            		ActiveRecord::EVENT_BEFORE_INSERT => 'created_at', // What a heck?! It's working!
 //            		ActiveRecord::EVENT_BEFORE_UPDATE => 'updated_at'
 //            	],
 //            	'value' => function() { return time('U'); }
 //            ]
 //        ];
 //    }

    public function rules()
    {
    	return [
    		[['username', 'message'], 'required']
    	];
    }

    public function fields()
    {
    	return [
    		'id',
    		'username',
    		'message',
    		'created_at'
    	];
    }
}