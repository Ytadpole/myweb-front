import Mock from 'mockjs';

const mockUtils = {
		// 'test': Mock.mock('test', {
		// 	'statusCode': '200',
		// 	'data': {
		// 		'id|1-10000': 1,
		// 		'name': '1元红包',
		// 		'type': 'hb:100',
		// 		'level': '五等奖',
		// 		'sno': 'pd4mjq'
		// 	},
		// 	'msg': '恭喜你，中奖了'
		// }),
		// 'test2': Mock.mock('test2', {
		// 	'statusCode': '200',
		// 	'data': {
		// 		'id|1-10000': 1,
		// 		'name': '1元红包',
		// 		'type': 'hb:100',
		// 		'level': '五等奖',
		// 		'sno': 'pd4mjq'
		// 	},
		// 	'msg': '恭喜你，中奖了2'
		// }),
		'posts': Mock.mock('posts', {
			'code': 200,
			'msg': '成功',
			'data': [{
				'id': 1,
				'title': '一个前端的自我修养',
				'tags': ['Aries', 'Fire', 'Mars'],
				'category': 'Signs',
				'commentsNum': 20,
				'createTime': 'August 24, 2013 9:00 PM',
				'brief': `今天给大家分享的主题是前端的自我成长，这是一个关于成长的话题。
很多人都有这样的感觉：听了很多技术圈子的分享，有的有深度、有的循循善诱、深入浅出。但是呢！几年下来，到底哪些用上了，哪些对自己真的有帮助了？反而有些模糊
				`,
				'content': `
					今天给大家分享的主题是前端的自我成长，这是一个关于成长的话题。
很多人都有这样的感觉：听了很多技术圈子的分享，有的有深度、有的循循善诱、深入浅出。但是呢！几年下来，到底哪些用上了，哪些对自己真的有帮助了？反而有些模糊
				`
			},
			{
				'id': 2,
				'title': 'Aries Sun Sign March 21 - April 19',
				'tags': ['Aries', 'Fire', 'Mars'],
				'category': 'Signs',
				'commentsNum': 20,
				'createTime': 'August 24, 2013 9:00 PM',
				'brief': `Aries is the first sign of the zodiac, 
								and that's pretty much how those born under this 
								sign see themselves: first. Aries are the leaders
								 of the pack, first in line to get things going. Whether 
								 or not everything gets done is another question altogether, 
								 for an Aries prefers to initiate rather than to complete. Do 
								 	you have a project needing a kick-start? Call an Aries, 
								 by all means. The leadership displayed by Aries is most impressive, 
								 so don't be surprised if they can rally the troops against seemingly insurmountable odds.`,
				'content': `
					The symbol of Aries is the Ram, and that's both good 
					and bad news. Impulsive Aries might be tempted to 
					ram their ideas down everyone's throats without even 
					bothering to ask if they want to know. It's these times 
					when you may wish Aries' symbol were a more subdued creature, 
					more lamb than ram perhaps. You're not likely to convince the 
					Ram to soften up; these folks are blunt and to the point. 
					Along with those qualities comes the sheer force of the Aries nature, 
					a force that can actually accomplish a great deal. Much of Aries' drive 
					to compete and to win comes from its Cardinal Quality. Cardinal Signs 
					love to get things going, and Aries exemplifies this even better than Cancer, Libra or Capricorn.
				`
			}]
		})

}

export default mockUtils