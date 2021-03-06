var PATH_PLUGINS_PREFIX = './plugins/'
    , KEY_STORAGE_SETTINGS = "settings"
    , KEY_STORAGE_AUTO_DOWNLOAD = "downloadSetting"
    , KEY_STORAGE_PICTURE_FORMAT = "pictureFormatSetting"
    , KEY_STORAGE_VIDEO_WIDTH = "videoWidthSetting"
    , KEY_STORAGE_VIDEO_HEIGHT = "videoHeightSetting"
    , KEY_STORAGE_ASPECT_RATIO = "aspectRatioSetting"
    , KEY_STORAGE_GIF_QUALITY = "gifQualitySetting"
    , KEY_STORAGE_GIF_FRAME_RATE = "gifFrameRateSetting"
    , DEFAULT_AUTO_DOWNLOAD = false
    , DEFAULT_PICTURE_FORMAT = "png"
    , DEFAULT_VIDEO_WIDTH = 640
    , DEFAULT_VIDEO_HEIGHT = 480
    , DEFAULT_VIDEO_FRAME_RATE = 60
    , DEFAULT_VIDEO_QUALITY = 0.75
    , DEFAULT_ASPECT_RATIO = false
    , DEFAULT_GIF_QUALITY = 50
    , DEFAULT_GIF_FRAME_RATE = 15
    , DEFAULT_JPEG_QUALITY = 75
    , GIF_QUALITY_RANGE = 19
    , APP_ID_PRODUCTION = 'eiejkbiipijgeojclpabeedcjalfmnoj'
    , DEBUG = (chrome.i18n.getMessage('@@extension_id') !== APP_ID_PRODUCTION)
;
