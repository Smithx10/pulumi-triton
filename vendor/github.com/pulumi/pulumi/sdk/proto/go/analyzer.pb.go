// Code generated by protoc-gen-go. DO NOT EDIT.
// source: analyzer.proto

package pulumirpc

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import empty "github.com/golang/protobuf/ptypes/empty"
import _struct "github.com/golang/protobuf/ptypes/struct"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type AnalyzeRequest struct {
	Type                 string          `protobuf:"bytes,1,opt,name=type" json:"type,omitempty"`
	Properties           *_struct.Struct `protobuf:"bytes,2,opt,name=properties" json:"properties,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *AnalyzeRequest) Reset()         { *m = AnalyzeRequest{} }
func (m *AnalyzeRequest) String() string { return proto.CompactTextString(m) }
func (*AnalyzeRequest) ProtoMessage()    {}
func (*AnalyzeRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_analyzer_4d94ca02b59f2385, []int{0}
}
func (m *AnalyzeRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AnalyzeRequest.Unmarshal(m, b)
}
func (m *AnalyzeRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AnalyzeRequest.Marshal(b, m, deterministic)
}
func (dst *AnalyzeRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AnalyzeRequest.Merge(dst, src)
}
func (m *AnalyzeRequest) XXX_Size() int {
	return xxx_messageInfo_AnalyzeRequest.Size(m)
}
func (m *AnalyzeRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_AnalyzeRequest.DiscardUnknown(m)
}

var xxx_messageInfo_AnalyzeRequest proto.InternalMessageInfo

func (m *AnalyzeRequest) GetType() string {
	if m != nil {
		return m.Type
	}
	return ""
}

func (m *AnalyzeRequest) GetProperties() *_struct.Struct {
	if m != nil {
		return m.Properties
	}
	return nil
}

type AnalyzeResponse struct {
	Failures             []*AnalyzeFailure `protobuf:"bytes,1,rep,name=failures" json:"failures,omitempty"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *AnalyzeResponse) Reset()         { *m = AnalyzeResponse{} }
func (m *AnalyzeResponse) String() string { return proto.CompactTextString(m) }
func (*AnalyzeResponse) ProtoMessage()    {}
func (*AnalyzeResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_analyzer_4d94ca02b59f2385, []int{1}
}
func (m *AnalyzeResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AnalyzeResponse.Unmarshal(m, b)
}
func (m *AnalyzeResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AnalyzeResponse.Marshal(b, m, deterministic)
}
func (dst *AnalyzeResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AnalyzeResponse.Merge(dst, src)
}
func (m *AnalyzeResponse) XXX_Size() int {
	return xxx_messageInfo_AnalyzeResponse.Size(m)
}
func (m *AnalyzeResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_AnalyzeResponse.DiscardUnknown(m)
}

var xxx_messageInfo_AnalyzeResponse proto.InternalMessageInfo

func (m *AnalyzeResponse) GetFailures() []*AnalyzeFailure {
	if m != nil {
		return m.Failures
	}
	return nil
}

type AnalyzeFailure struct {
	Property             string   `protobuf:"bytes,1,opt,name=property" json:"property,omitempty"`
	Reason               string   `protobuf:"bytes,2,opt,name=reason" json:"reason,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AnalyzeFailure) Reset()         { *m = AnalyzeFailure{} }
func (m *AnalyzeFailure) String() string { return proto.CompactTextString(m) }
func (*AnalyzeFailure) ProtoMessage()    {}
func (*AnalyzeFailure) Descriptor() ([]byte, []int) {
	return fileDescriptor_analyzer_4d94ca02b59f2385, []int{2}
}
func (m *AnalyzeFailure) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AnalyzeFailure.Unmarshal(m, b)
}
func (m *AnalyzeFailure) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AnalyzeFailure.Marshal(b, m, deterministic)
}
func (dst *AnalyzeFailure) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AnalyzeFailure.Merge(dst, src)
}
func (m *AnalyzeFailure) XXX_Size() int {
	return xxx_messageInfo_AnalyzeFailure.Size(m)
}
func (m *AnalyzeFailure) XXX_DiscardUnknown() {
	xxx_messageInfo_AnalyzeFailure.DiscardUnknown(m)
}

var xxx_messageInfo_AnalyzeFailure proto.InternalMessageInfo

func (m *AnalyzeFailure) GetProperty() string {
	if m != nil {
		return m.Property
	}
	return ""
}

func (m *AnalyzeFailure) GetReason() string {
	if m != nil {
		return m.Reason
	}
	return ""
}

func init() {
	proto.RegisterType((*AnalyzeRequest)(nil), "pulumirpc.AnalyzeRequest")
	proto.RegisterType((*AnalyzeResponse)(nil), "pulumirpc.AnalyzeResponse")
	proto.RegisterType((*AnalyzeFailure)(nil), "pulumirpc.AnalyzeFailure")
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for Analyzer service

type AnalyzerClient interface {
	// Analyze analyzes a single resource object, and returns any errors that it finds.
	Analyze(ctx context.Context, in *AnalyzeRequest, opts ...grpc.CallOption) (*AnalyzeResponse, error)
	// GetPluginInfo returns generic information about this plugin, like its version.
	GetPluginInfo(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*PluginInfo, error)
}

type analyzerClient struct {
	cc *grpc.ClientConn
}

func NewAnalyzerClient(cc *grpc.ClientConn) AnalyzerClient {
	return &analyzerClient{cc}
}

func (c *analyzerClient) Analyze(ctx context.Context, in *AnalyzeRequest, opts ...grpc.CallOption) (*AnalyzeResponse, error) {
	out := new(AnalyzeResponse)
	err := grpc.Invoke(ctx, "/pulumirpc.Analyzer/Analyze", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *analyzerClient) GetPluginInfo(ctx context.Context, in *empty.Empty, opts ...grpc.CallOption) (*PluginInfo, error) {
	out := new(PluginInfo)
	err := grpc.Invoke(ctx, "/pulumirpc.Analyzer/GetPluginInfo", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Analyzer service

type AnalyzerServer interface {
	// Analyze analyzes a single resource object, and returns any errors that it finds.
	Analyze(context.Context, *AnalyzeRequest) (*AnalyzeResponse, error)
	// GetPluginInfo returns generic information about this plugin, like its version.
	GetPluginInfo(context.Context, *empty.Empty) (*PluginInfo, error)
}

func RegisterAnalyzerServer(s *grpc.Server, srv AnalyzerServer) {
	s.RegisterService(&_Analyzer_serviceDesc, srv)
}

func _Analyzer_Analyze_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AnalyzeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AnalyzerServer).Analyze(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pulumirpc.Analyzer/Analyze",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AnalyzerServer).Analyze(ctx, req.(*AnalyzeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Analyzer_GetPluginInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(empty.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AnalyzerServer).GetPluginInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/pulumirpc.Analyzer/GetPluginInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AnalyzerServer).GetPluginInfo(ctx, req.(*empty.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

var _Analyzer_serviceDesc = grpc.ServiceDesc{
	ServiceName: "pulumirpc.Analyzer",
	HandlerType: (*AnalyzerServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Analyze",
			Handler:    _Analyzer_Analyze_Handler,
		},
		{
			MethodName: "GetPluginInfo",
			Handler:    _Analyzer_GetPluginInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "analyzer.proto",
}

func init() { proto.RegisterFile("analyzer.proto", fileDescriptor_analyzer_4d94ca02b59f2385) }

var fileDescriptor_analyzer_4d94ca02b59f2385 = []byte{
	// 285 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x09, 0x6e, 0x88, 0x02, 0xff, 0x6c, 0x91, 0x4f, 0x4b, 0xc3, 0x40,
	0x10, 0xc5, 0x1b, 0x95, 0x9a, 0x8c, 0x5a, 0x61, 0xc0, 0x5a, 0x57, 0x0f, 0x25, 0x27, 0x4f, 0x5b,
	0xa8, 0x88, 0x57, 0x15, 0xff, 0xde, 0x24, 0x9e, 0x3d, 0xa4, 0x65, 0x12, 0x02, 0x69, 0x76, 0xdd,
	0x3f, 0x87, 0xf8, 0x29, 0xfc, 0xc8, 0xc6, 0xdd, 0x35, 0x16, 0xed, 0x6d, 0x86, 0xf7, 0xf8, 0xcd,
	0x9b, 0x19, 0x18, 0xe5, 0x4d, 0x5e, 0xb7, 0x1f, 0xa4, 0xb8, 0x54, 0xc2, 0x08, 0x4c, 0xa4, 0xad,
	0xed, 0xaa, 0x52, 0x72, 0xc9, 0xf6, 0x65, 0x6d, 0xcb, 0xaa, 0xf1, 0x02, 0x3b, 0x2d, 0x85, 0x28,
	0x6b, 0x9a, 0xb9, 0x6e, 0x61, 0x8b, 0x19, 0xad, 0xa4, 0x69, 0x83, 0x78, 0xf6, 0x57, 0xd4, 0x46,
	0xd9, 0xa5, 0xf1, 0x6a, 0xfa, 0x06, 0xa3, 0x1b, 0x3f, 0x25, 0xa3, 0x77, 0x4b, 0xda, 0x20, 0xc2,
	0x8e, 0x69, 0x25, 0x4d, 0xa2, 0x69, 0x74, 0x9e, 0x64, 0xae, 0xc6, 0x2b, 0x80, 0xce, 0x2e, 0x49,
	0x99, 0x8a, 0xf4, 0x64, 0xab, 0x53, 0xf6, 0xe6, 0xc7, 0xdc, 0x83, 0xf9, 0x0f, 0x98, 0xbf, 0x3a,
	0x70, 0xb6, 0x66, 0x4d, 0x9f, 0xe0, 0xb0, 0xc7, 0x6b, 0x29, 0x1a, 0x4d, 0x78, 0x09, 0x71, 0x91,
	0x57, 0xb5, 0x55, 0x1d, 0x29, 0x9a, 0x6e, 0x77, 0xa4, 0x13, 0xde, 0x2f, 0xc6, 0x83, 0xfb, 0xc1,
	0x3b, 0xb2, 0xde, 0x9a, 0xde, 0xf5, 0x41, 0x83, 0x86, 0x0c, 0xe2, 0x30, 0xa9, 0x0d, 0x61, 0xfb,
	0x1e, 0xc7, 0x30, 0x54, 0x94, 0x6b, 0xd1, 0xb8, 0xb0, 0x49, 0x16, 0xba, 0xf9, 0x67, 0x04, 0x71,
	0xc0, 0x28, 0xbc, 0x85, 0xdd, 0x50, 0xe3, 0x86, 0x08, 0xe1, 0x1e, 0x8c, 0x6d, 0x92, 0xfc, 0x2e,
	0xe9, 0x00, 0xaf, 0xe1, 0xe0, 0x91, 0xcc, 0x8b, 0xfb, 0xc6, 0x73, 0x53, 0x08, 0x1c, 0xff, 0x3b,
	0xcb, 0xfd, 0xf7, 0x33, 0xd8, 0xd1, 0x1a, 0xe6, 0xd7, 0x9e, 0x0e, 0x16, 0x43, 0x67, 0xbc, 0xf8,
	0x0a, 0x00, 0x00, 0xff, 0xff, 0xff, 0x6d, 0x9c, 0x46, 0xee, 0x01, 0x00, 0x00,
}