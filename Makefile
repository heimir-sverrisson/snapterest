SOURCE_DIR=source
BUILD_DIR=build
BROWSERIFY=browserify
TARGET=snapterest.js

.PHONY: code chap3 chap3_stateful

chap2:
	$(MAKE) -C $(SOURCE_DIR) all
	@$(BROWSERIFY) $(SOURCE_DIR)/app.js >$(BUILD_DIR)/$(TARGET)

chap3:
	@$(BROWSERIFY) $(SOURCE_DIR)/chap3.js >$(BUILD_DIR)/$(TARGET)

chap3_stateful:
	@$(BROWSERIFY) $(SOURCE_DIR)/chap3_stateful.js >$(BUILD_DIR)/$(TARGET)
