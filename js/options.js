
$(function()
{
    // Variables
    init();

    // Initialize options
    function init()
    {
        console.log('init()');

        setDefaults();
        attachListeners();
        reloadSettings();
    }

    // Set default settings
    function setDefaults()
    {
        $('#downloadSetting').prop('checked', DEFAULT_AUTO_DOWNLOAD);
        $('#pictureFormatSetting').val(DEFAULT_PICTURE_FORMAT);
        $('#videoWidthSetting').val(DEFAULT_VIDEO_WIDTH);
        $('#videoHeightSetting').val(DEFAULT_VIDEO_HEIGHT);
        $('#aspectRatioSetting').prop('checked', DEFAULT_ASPECT_RATIO);
        $('#gifQualitySetting').val(DEFAULT_GIF_QUALITY);
        $('#gifFrameRateSetting').val(DEFAULT_GIF_FRAME_RATE);
    }

    // Attach listeners to UI elements
    function attachListeners()
    {
        console.log('attachListeners()');

        // Track changes to checkboxes and comboboxes
        $('input[type="checkbox"], input[type="number"], input[type="date"], select')
            .on('change', function() {
            saveSettings();
        });

        // Track changes to regular input fields
        $('input[type="text"], input[type="number"], input[type="date"], textarea')
            .on('blur', function() {
            saveSettings();
        });

        // Track range input changes
        $('input[type="range"]').on('mouseup', function() 
        {
            this.blur();
            saveSettings();
        })
        .on('mousedown input', function() {
            updateRangeOutput(this);
        });
    }

    // Reload settings
    function reloadSettings()
    {
        console.log('reloadSettings()');

        chrome.storage.sync.get(KEY_STORAGE_SETTINGS, function(data)
        {
            if (chrome.runtime.lastError) 
            {
                console.log(chrome.runtime.lastError);
                alert('Could not collect load settings!');
            } 
            else    // Success, update settings
            {	
                console.log('Load success!', data);

                // Update input fields
                var settings = data[KEY_STORAGE_SETTINGS];
                $.each(settings, function(key, value) 
                {
                    var el = $('#' + key);
                    if (el.attr('type') == 'checkbox') {
                        el[0].checked = value;
                    } else {
                        el.val(value);
                    }
                });
                
                // Update range outputs
                $('input[type="range"]').each(function (index, element) {
                    updateRangeOutput(element);
                });
            }
        });
    }

    // Save settings
    function saveSettings()
    {
        console.log('saveSettings()');

        // Collect settings from inputs
        var settings = {};
        $('input, select').each(function(index, element) 
        {
            if ($(element).attr('type') == 'checkbox') {
                settings[element.id] = element.checked;
            } else {
                settings[element.id] = element.value;
            }
        });

        // Save with key
        var data = {};
        data[KEY_STORAGE_SETTINGS] = settings;
        chrome.storage.sync.set(data, function()
        {
            if (chrome.runtime.lastError) 
            {
                console.log(chrome.runtime.lastError);
                alert('Could not save settings!');
            } 
            else    // Success
            {
                console.log('Save success!', data);
            }
        });
    }

    // Update range input outputs
    function updateRangeOutput(range) {
        $('output[name=' + range.id + ']').text(range.value);
    }
});
