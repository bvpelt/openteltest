import { registerInstrumentations } from '@opentelemetry/instrumentation';
import {
    WebTracerProvider,
//    ConsoleSpanExporter,
    //SimpleSpanProcessor,
    BatchSpanProcessor,
} from '@opentelemetry/sdk-trace-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
//import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ZoneContextManager } from '@opentelemetry/context-zone';
import { JaegerExporter } from '@opentelemetry/exporter-jaeger';

const provider = new WebTracerProvider();

const options = {
  tags: [], // optional
  // You can use the default UDPSender
  //host: 'localhost', // optional
  //port: 6832, // optional
  // OR you can use the HTTPSender as follows
  endpoint: 'http://localhost:4318/api/traces',
  maxPacketSize: 65000 // optional
}
const exporter = new JaegerExporter(options);

/*
// For demo purposes only, immediately log traces to the console
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

// Batch traces before sending them to HoneyComb
provider.addSpanProcessor(
    new BatchSpanProcessor(
        new OTLPTraceExporter({
            url: 'http://localhost:4318/v1/traces',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/x-protobuf'
          },
        }),
    ),
);
*/

provider.addSpanProcessor(new BatchSpanProcessor(exporter));

provider.register({
  contextManager: new ZoneContextManager(),
});


registerInstrumentations({
    instrumentations: [
        getWebAutoInstrumentations({
            '@opentelemetry/instrumentation-document-load': {},
            '@opentelemetry/instrumentation-user-interaction': {},
            '@opentelemetry/instrumentation-fetch': {},
            '@opentelemetry/instrumentation-xml-http-request': {},
        }),
    ],
});







