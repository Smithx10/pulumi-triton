/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var provider_pb = require('./provider_pb.js');
goog.exportSymbol('proto.pulumirpc.NewResourceRequest', null, global);
goog.exportSymbol('proto.pulumirpc.NewResourceResponse', null, global);
goog.exportSymbol('proto.pulumirpc.RunRequest', null, global);
goog.exportSymbol('proto.pulumirpc.RunResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.RunRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulumirpc.RunRequest.repeatedFields_, null);
};
goog.inherits(proto.pulumirpc.RunRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.RunRequest.displayName = 'proto.pulumirpc.RunRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulumirpc.RunRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.RunRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.RunRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.RunRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RunRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    project: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stack: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pwd: jspb.Message.getFieldWithDefault(msg, 3, ""),
    program: jspb.Message.getFieldWithDefault(msg, 4, ""),
    argsList: jspb.Message.getRepeatedField(msg, 5),
    configMap: (f = msg.getConfigMap()) ? f.toObject(includeInstance, undefined) : [],
    dryrun: jspb.Message.getFieldWithDefault(msg, 7, false),
    parallel: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.RunRequest}
 */
proto.pulumirpc.RunRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.RunRequest;
  return proto.pulumirpc.RunRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.RunRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.RunRequest}
 */
proto.pulumirpc.RunRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStack(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPwd(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgram(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addArgs(value);
      break;
    case 6:
      var value = msg.getConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString);
         });
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDryrun(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParallel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.RunRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.RunRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.RunRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RunRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStack();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPwd();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProgram();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getDryrun();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getParallel();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional string project = 1;
 * @return {string}
 */
proto.pulumirpc.RunRequest.prototype.getProject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pulumirpc.RunRequest.prototype.setProject = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string stack = 2;
 * @return {string}
 */
proto.pulumirpc.RunRequest.prototype.getStack = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.pulumirpc.RunRequest.prototype.setStack = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string pwd = 3;
 * @return {string}
 */
proto.pulumirpc.RunRequest.prototype.getPwd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.pulumirpc.RunRequest.prototype.setPwd = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string program = 4;
 * @return {string}
 */
proto.pulumirpc.RunRequest.prototype.getProgram = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.pulumirpc.RunRequest.prototype.setProgram = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated string args = 5;
 * @return {!Array.<string>}
 */
proto.pulumirpc.RunRequest.prototype.getArgsList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array.<string>} value */
proto.pulumirpc.RunRequest.prototype.setArgsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.pulumirpc.RunRequest.prototype.addArgs = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.pulumirpc.RunRequest.prototype.clearArgsList = function() {
  this.setArgsList([]);
};


/**
 * map<string, string> config = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.pulumirpc.RunRequest.prototype.getConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


proto.pulumirpc.RunRequest.prototype.clearConfigMap = function() {
  this.getConfigMap().clear();
};


/**
 * optional bool dryRun = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.pulumirpc.RunRequest.prototype.getDryrun = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.pulumirpc.RunRequest.prototype.setDryrun = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional int32 parallel = 8;
 * @return {number}
 */
proto.pulumirpc.RunRequest.prototype.getParallel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.pulumirpc.RunRequest.prototype.setParallel = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.RunResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pulumirpc.RunResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.RunResponse.displayName = 'proto.pulumirpc.RunResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.RunResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.RunResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.RunResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RunResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.RunResponse}
 */
proto.pulumirpc.RunResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.RunResponse;
  return proto.pulumirpc.RunResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.RunResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.RunResponse}
 */
proto.pulumirpc.RunResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.RunResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.RunResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.RunResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.RunResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.pulumirpc.RunResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pulumirpc.RunResponse.prototype.setError = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.NewResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulumirpc.NewResourceRequest.repeatedFields_, null);
};
goog.inherits(proto.pulumirpc.NewResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.NewResourceRequest.displayName = 'proto.pulumirpc.NewResourceRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulumirpc.NewResourceRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.NewResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.NewResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.NewResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.NewResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    childrenList: jspb.Message.getRepeatedField(msg, 3),
    custom: jspb.Message.getFieldWithDefault(msg, 4, false),
    object: (f = msg.getObject()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.NewResourceRequest}
 */
proto.pulumirpc.NewResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.NewResourceRequest;
  return proto.pulumirpc.NewResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.NewResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.NewResourceRequest}
 */
proto.pulumirpc.NewResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addChildren(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCustom(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.NewResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.NewResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.NewResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.NewResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChildrenList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCustom();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.pulumirpc.NewResourceRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pulumirpc.NewResourceRequest.prototype.setType = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.pulumirpc.NewResourceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.pulumirpc.NewResourceRequest.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated string children = 3;
 * @return {!Array.<string>}
 */
proto.pulumirpc.NewResourceRequest.prototype.getChildrenList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array.<string>} value */
proto.pulumirpc.NewResourceRequest.prototype.setChildrenList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.pulumirpc.NewResourceRequest.prototype.addChildren = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.pulumirpc.NewResourceRequest.prototype.clearChildrenList = function() {
  this.setChildrenList([]);
};


/**
 * optional bool custom = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.pulumirpc.NewResourceRequest.prototype.getCustom = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.pulumirpc.NewResourceRequest.prototype.setCustom = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional google.protobuf.Struct object = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.pulumirpc.NewResourceRequest.prototype.getObject = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.pulumirpc.NewResourceRequest.prototype.setObject = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.pulumirpc.NewResourceRequest.prototype.clearObject = function() {
  this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pulumirpc.NewResourceRequest.prototype.hasObject = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pulumirpc.NewResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pulumirpc.NewResourceResponse.repeatedFields_, null);
};
goog.inherits(proto.pulumirpc.NewResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pulumirpc.NewResourceResponse.displayName = 'proto.pulumirpc.NewResourceResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pulumirpc.NewResourceResponse.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pulumirpc.NewResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pulumirpc.NewResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pulumirpc.NewResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.NewResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    urn: jspb.Message.getFieldWithDefault(msg, 2, ""),
    object: (f = msg.getObject()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    stable: jspb.Message.getFieldWithDefault(msg, 4, false),
    stablesList: jspb.Message.getRepeatedField(msg, 5)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pulumirpc.NewResourceResponse}
 */
proto.pulumirpc.NewResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pulumirpc.NewResourceResponse;
  return proto.pulumirpc.NewResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pulumirpc.NewResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pulumirpc.NewResourceResponse}
 */
proto.pulumirpc.NewResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrn(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setObject(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStable(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addStables(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pulumirpc.NewResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pulumirpc.NewResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pulumirpc.NewResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pulumirpc.NewResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrn();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getObject();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getStable();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getStablesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pulumirpc.NewResourceResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.pulumirpc.NewResourceResponse.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string urn = 2;
 * @return {string}
 */
proto.pulumirpc.NewResourceResponse.prototype.getUrn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.pulumirpc.NewResourceResponse.prototype.setUrn = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional google.protobuf.Struct object = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.pulumirpc.NewResourceResponse.prototype.getObject = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.pulumirpc.NewResourceResponse.prototype.setObject = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.pulumirpc.NewResourceResponse.prototype.clearObject = function() {
  this.setObject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.pulumirpc.NewResourceResponse.prototype.hasObject = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool stable = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.pulumirpc.NewResourceResponse.prototype.getStable = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.pulumirpc.NewResourceResponse.prototype.setStable = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated string stables = 5;
 * @return {!Array.<string>}
 */
proto.pulumirpc.NewResourceResponse.prototype.getStablesList = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/** @param {!Array.<string>} value */
proto.pulumirpc.NewResourceResponse.prototype.setStablesList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.pulumirpc.NewResourceResponse.prototype.addStables = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


proto.pulumirpc.NewResourceResponse.prototype.clearStablesList = function() {
  this.setStablesList([]);
};


goog.object.extend(exports, proto.pulumirpc);
