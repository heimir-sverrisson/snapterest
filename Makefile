SOURCE_DIR=source
BUILD_DIR=build
BROWSERIFY=browserify
TARGET=snapterest.js

.PHONY: make_code

make_code:
	$(MAKE) -C $(SOURCE_DIR) all
	$(BROWSERIFY) $(SOURCE_DIR)/*.js >$(BUILD_DIR)/$(TARGET)
