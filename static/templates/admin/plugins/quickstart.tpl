<form role="form" class="quickstart-settings">
	<div class="row mb-4">
		<div class="col-sm-2 col-12 settings-header">General</div>
		<div class="col-sm-10 col-12">
			<p class="lead">
				Adjust these settings. You can then retrieve these settings in code via:
				<code>meta.settings.get('quickstart', function(err, settings) {...});</code>
			</p>
			<div class="mb-3">
				<label class="form-label" for="setting1">Setting 1</label>
				<input type="text" id="setting1" name="setting1" title="Setting 1" class="form-control" placeholder="Setting 1">
			</div>
			<div class="mb-3">
				<label class="form-label" for="setting2">Setting 2</label>
				<input type="text" id="setting2" name="setting2" title="Setting 2" class="form-control" placeholder="Setting 2">
			</div>

			<div class="form-check">
				<input type="checkbox" class="form-check-input" id="setting3" name="setting3">
				<label for="setting3" class="form-check-label">Setting 3</label>
			</div>
		</div>
	</div>

	<div class="row mb-4">
		<div class="col-sm-2 col-12 settings-header">Colors</div>
		<div class="col-sm-10 col-12">
			<p class="alert" id="preview">
				Here is some preview text. Use the inputs below to modify this alert's appearance.
			</p>
			<div class="mb-3">
				<label class="form-label" for="color">Foreground</label>
				<input data-settings="colorpicker" type="color" id="color" name="color" title="Background Color" class="form-control" placeholder="#ffffff" value="#ffffff" />
			</div>
			<div class="mb-3">
				<label class="form-label" for="bgColor">Background</label>
				<input data-settings="colorpicker" type="color" id="bgColor" name="bgColor" title="Background Color" class="form-control" placeholder="#000000" value="#000000" />
			</div>
		</div>
	</div>

	<div class="row mb-4">
		<div class="col-sm-2 col-12 settings-header">Sorted List</div>
		<div class="col-sm-10 col-12">
			<div class="mb-3" data-type="sorted-list" data-sorted-list="sample-list" data-item-template="admin/plugins/quickstart/partials/sorted-list/item" data-form-template="admin/plugins/quickstart/partials/sorted-list/form">
				<ul data-type="list" class="list-group mb-2"></ul>
				<button type="button" data-type="add" class="btn btn-info">Add Item</button>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-sm-2 col-12 settings-header">Uploads</div>
		<div class="col-sm-10 col-12">
			<label class="form-label" for="uploadedImage">Upload Image</label>
			<div class="input-group">
				<input id="uploadedImage" name="uploadedImage" type="text" class="form-control" />
				<input value="Upload" data-action="upload" data-target="uploadedImage" type="button" class="btn btn-default" />
			</div>
		</div>
	</div>
</form>

<!-- IMPORT admin/partials/save_button.tpl -->