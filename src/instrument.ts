/*
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import {
    WebTracerProvider,
    ConsoleSpanExporter,
    SimpleSpanProcessor,
    BatchSpanProcessor,
} from '@opentelemetry/sdk-trace-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { ZoneContextManager } from '@opentelemetry/context-zone';

const provider = new WebTracerProvider();

// For demo purposes only, immediately log traces to the console
provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

// Batch traces before sending them to HoneyComb
provider.addSpanProcessor(
    new BatchSpanProcessor(
        new OTLPTraceExporter({
            url: 'http://localhost:4318/api/traces',
            headers: {

            },
        }),
    ),
);

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
*/
