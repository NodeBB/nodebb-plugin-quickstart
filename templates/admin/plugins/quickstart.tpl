<div class="acp-page-container">
	<!-- IMPORT admin/partials/settings/header.tpl -->

	<div class="row m-0">
		<div id="spy-container" class="col-12 col-md-8 px-0 mb-4" tabindex="0">
			<form role="form" class="quickstart-settings">
				<div class="mb-4">
					<h5 class="fw-bold tracking-tight settings-header">General</h5>

					<p class="lead">
						Adjust these settings. You can then retrieve these settings in code via:
						<br/><code>await meta.settings.get('quickstart');</code>
					</p>
					<div class="mb-3">
						<label class="form-label" for="setting-1">Setting 1</label>
						<input type="text" id="setting-1" name="setting-1" title="Setting 1" class="form-control" placeholder="Setting 1">
					</div>
					<div class="mb-3">
						<label class="form-label" for="setting-2">Setting 2</label>
						<input type="text" id="setting-2" name="setting-2" title="Setting 2" class="form-control" placeholder="Setting 2">
					</div>

					<div class="form-check form-switch">
						<input type="checkbox" class="form-check-input" id="setting-3" name="setting-3">
						<label for="setting-3" class="form-check-label">Setting 3</label>
					</div>
				</div>
			</form>
		</div>

		<!-- IMPORT admin/partials/settings/toc.tpl -->
	</div>
</div>
