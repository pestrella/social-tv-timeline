$(document).ready(function() {
	$('#filter-showall').click(function() {
		$('div.lane-slot.info .lane-circle').show();
		$('div.lane-slot.friends .lane-circle').show();
		$('div.lane-slot.editor .lane-circle').show();

		$('div.lane-slot.info .lane-slot-title span').show();
		$('div.lane-slot.friends .lane-slot-title span').show();
		$('div.lane-slot.editor .lane-slot-title span').show();

		$('div.lane-slot.info .lane-slot-memos .memo').show();
		$('div.lane-slot.friends .lane-slot-memos .memo').show();
		$('div.lane-slot.editor .lane-slot-memos .memo').show();
	});
	$('#filter-info').click(function() {
		$('div.lane-slot.info .lane-circle').show();
		$('div.lane-slot.friends .lane-circle').hide();
		$('div.lane-slot.editor .lane-circle').hide();

		$('div.lane-slot.info .lane-slot-title span').show();
		$('div.lane-slot.friends .lane-slot-title span').hide();
		$('div.lane-slot.editor .lane-slot-title span').hide();

		$('div.lane-slot.info .lane-slot-memos .memo').show();
		$('div.lane-slot.friends .lane-slot-memos .memo').hide();
		$('div.lane-slot.editor .lane-slot-memos .memo').hide();
	});
	$('#filter-friends').click(function() {
		$('div.lane-slot.info .lane-circle').hide();
		$('div.lane-slot.friends .lane-circle').show();
		$('div.lane-slot.editor .lane-circle').hide();

		$('div.lane-slot.info .lane-slot-title span').hide();
		$('div.lane-slot.friends .lane-slot-title span').show();
		$('div.lane-slot.editor .lane-slot-title span').hide();

		$('div.lane-slot.info .lane-slot-memos .memo').hide();
		$('div.lane-slot.friends .lane-slot-memos .memo').show();
		$('div.lane-slot.editor .lane-slot-memos .memo').hide();
	});
	$('#filter-editor').click(function() {
		$('div.lane-slot.info .lane-circle').hide();
		$('div.lane-slot.friends .lane-circle').hide();
		$('div.lane-slot.editor .lane-circle').show();

		$('div.lane-slot.info .lane-slot-title span').hide();
		$('div.lane-slot.friends .lane-slot-title span').hide();
		$('div.lane-slot.editor .lane-slot-title span').show();

		$('div.lane-slot.info .lane-slot-memos .memo').hide();
		$('div.lane-slot.friends .lane-slot-memos .memo').hide();
		$('div.lane-slot.editor .lane-slot-memos .memo').show();
	});
});