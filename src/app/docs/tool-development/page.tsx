import { Metadata } from 'next'
import Link from 'next/link'
import { 
  WrenchScrewdriverIcon,
  CodeBracketIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Tool Development - Gemini CLI Documentation',
  description: 'Complete guide to developing custom tools for Gemini CLI including tool definition, implementation, testing, and best practices.',
  keywords: 'Gemini CLI tool development, custom tools, tool creation, plugin development, API integration',
  openGraph: {
    title: 'Tool Development - Gemini CLI',
    description: 'Create custom tools to extend Gemini CLI functionality',
    type: 'article',
  },
}

const developmentSteps = [
  {
    step: 1,
    title: 'Define Tool Interface',
    description: 'Create the tool definition with parameters and description',
    icon: CodeBracketIcon,
    example: `const toolDefinition = {
  name: 'calculate_age',
  description: 'Calculate age based on birth date',
  parameters: {
    type: 'object',
    properties: {
      birthDate: {
        type: 'string',
        format: 'date',
        description: 'Birth date in YYYY-MM-DD format'
      },
      currentDate: {
        type: 'string',
        format: 'date',
        description: 'Current date (optional, defaults to today)'
      }
    },
    required: ['birthDate']
  }
};`
  },
  {
    step: 2,
    title: 'Implement Tool Logic',
    description: 'Write the execution function that performs the tool\'s task',
    icon: CogIcon,
    example: `const executeFunction = async ({ birthDate, currentDate }) => {
  try {
    const birth = new Date(birthDate);
    const current = currentDate ? new Date(currentDate) : new Date();
    
    if (birth > current) {
      throw new Error('Birth date cannot be in the future');
    }
    
    const ageMs = current.getTime() - birth.getTime();
    const ageYears = Math.floor(ageMs / (1000 * 60 * 60 * 24 * 365.25));
    
    return \`Age: \${ageYears} years old\`;
  } catch (error) {
    return \`Error: \${error.message}\`;
  }
};`
  },
  {
    step: 3,
    title: 'Register the Tool',
    description: 'Add the tool to Gemini CLI\'s tool registry',
    icon: RocketLaunchIcon,
    example: `import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();

// Create complete tool
const ageTool = {
  ...toolDefinition,
  execute: executeFunction
};

// Register the tool
cli.registerTool(ageTool);

// Verify registration
console.log('Registered tools:', cli.listTools().map(t => t.name));`
  },
  {
    step: 4,
    title: 'Test the Tool',
    description: 'Test your tool to ensure it works correctly',
    icon: CheckCircleIcon,
    example: `// Test the tool directly
const result = await cli.executeTool('calculate_age', {
  birthDate: '1990-05-15'
});
console.log(result); // "Age: 34 years old"

// Test with AI
const response = await cli.ask(
  "How old would someone born on May 15, 1990 be today?",
  { tools: ['calculate_age'] }
);`
  }
]

const toolTemplate = `import { Tool, ToolDefinition } from '@google/generative-ai-cli';

export const myCustomTool: ToolDefinition = {
  name: 'my_custom_tool',
  description: 'Description of what this tool does',
  parameters: {
    type: 'object',
    properties: {
      // Define your parameters here
      input: {
        type: 'string',
        description: 'Input parameter description'
      }
    },
    required: ['input']
  },
  execute: async (params) => {
    try {
      // Your tool logic here
      const { input } = params;
      
      // Process the input
      const result = processInput(input);
      
      // Return the result
      return result;
    } catch (error) {
      // Handle errors gracefully
      return \`Error: \${error.message}\`;
    }
  }
};

function processInput(input: string): string {
  // Your processing logic
  return \`Processed: \${input}\`;
}`

const bestPractices = [
  {
    category: 'Tool Design',
    practices: [
      'Keep tools focused on a single responsibility',
      'Use clear, descriptive names and descriptions',
      'Define comprehensive parameter schemas',
      'Include examples in parameter descriptions',
      'Handle edge cases gracefully'
    ]
  },
  {
    category: 'Error Handling',
    practices: [
      'Always wrap execution in try-catch blocks',
      'Return meaningful error messages',
      'Validate input parameters',
      'Handle network timeouts and failures',
      'Log errors for debugging'
    ]
  },
  {
    category: 'Performance',
    practices: [
      'Implement async operations properly',
      'Add timeout handling for long operations',
      'Cache results when appropriate',
      'Minimize external dependencies',
      'Use streaming for large responses'
    ]
  },
  {
    category: 'Security',
    practices: [
      'Validate and sanitize all inputs',
      'Avoid executing arbitrary code',
      'Limit file system access',
      'Use secure API endpoints',
      'Handle sensitive data carefully'
    ]
  }
]

export default function ToolDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tool Development
            </h1>
            <p className="mt-6 text-xl leading-8 text-orange-100">
              Create custom tools to extend Gemini CLI's capabilities. Learn how to design, 
              implement, test, and deploy tools that integrate seamlessly with AI conversations.
            </p>
          </div>
        </div>
      </div>

      {/* Development Process */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Development Process
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Step-by-step guide to creating custom tools
            </p>
          </div>

          <div className="space-y-12">
            {developmentSteps.map((step, index) => (
              <div key={step.step} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-start space-x-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-semibold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <step.icon className="h-6 w-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-6">{step.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Example:</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{step.example}</code>
                      </pre>
                    </div>
                  </div>
                </div>
                {index < developmentSteps.length - 1 && (
                  <div className="ml-6 mt-6">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Template */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tool Template
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Use this template as a starting point for your custom tools
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm">
              <code>{toolTemplate}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Best Practices
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Guidelines for creating effective and reliable tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.practices.map((practice, practiceIndex) => (
                    <li key={practiceIndex} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testing Tools */}
      <div className="bg-blue-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Testing Your Tools
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Ensure your tools work correctly before deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Unit Testing
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                <code>{`// Test tool execution directly
import { myCustomTool } from './my-tool';

describe('myCustomTool', () => {
  test('should process input correctly', async () => {
    const result = await myCustomTool.execute({
      input: 'test data'
    });
    
    expect(result).toBe('Processed: test data');
  });
  
  test('should handle errors gracefully', async () => {
    const result = await myCustomTool.execute({
      input: null
    });
    
    expect(result).toMatch(/Error:/);
  });
});`}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Integration Testing
              </h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm">
                <code>{`// Test tool with Gemini CLI
import { GeminiCLI } from '@google/generative-ai-cli';

const cli = new GeminiCLI();
cli.registerTool(myCustomTool);

// Test tool registration
const tools = cli.listTools();
expect(tools.find(t => t.name === 'my_custom_tool')).toBeDefined();

// Test tool execution
const result = await cli.executeTool('my_custom_tool', {
  input: 'test'
});
expect(result).toBeDefined();`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Common Patterns */}
      <div className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Tool Patterns
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Reusable patterns for different types of tools
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                API Integration Tool
              </h3>
              <p className="text-gray-600 mb-4">
                Pattern for tools that integrate with external APIs
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`const apiTool = {
  name: 'api_call',
  description: 'Make API calls to external services',
  parameters: {
    type: 'object',
    properties: {
      endpoint: { type: 'string', description: 'API endpoint URL' },
      method: { type: 'string', enum: ['GET', 'POST'], default: 'GET' },
      data: { type: 'object', description: 'Request payload' }
    },
    required: ['endpoint']
  },
  execute: async ({ endpoint, method = 'GET', data }) => {
    try {
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: data ? JSON.stringify(data) : undefined
      });
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }
      
      return await response.json();
    } catch (error) {
      return \`API Error: \${error.message}\`;
    }
  }
};`}</code>
              </pre>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Data Processing Tool
              </h3>
              <p className="text-gray-600 mb-4">
                Pattern for tools that process and transform data
              </p>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <code>{`const processingTool = {
  name: 'data_processor',
  description: 'Process and transform data',
  parameters: {
    type: 'object',
    properties: {
      data: { type: 'array', description: 'Data to process' },
      operation: { 
        type: 'string', 
        enum: ['sort', 'filter', 'map', 'reduce'],
        description: 'Operation to perform'
      },
      criteria: { type: 'string', description: 'Processing criteria' }
    },
    required: ['data', 'operation']
  },
  execute: async ({ data, operation, criteria }) => {
    try {
      switch (operation) {
        case 'sort':
          return data.sort();
        case 'filter':
          return data.filter(item => item.includes(criteria));
        case 'map':
          return data.map(item => \`\${criteria}: \${item}\`);
        case 'reduce':
          return data.reduce((acc, item) => acc + item, '');
        default:
          throw new Error(\`Unknown operation: \${operation}\`);
      }
    } catch (error) {
      return \`Processing Error: \${error.message}\`;
    }
  }
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Related Resources */}
      <div className="bg-orange-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Related Resources
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore more about tools and development
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/docs/tools-api"
                className="rounded-lg bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors"
              >
                Tools API Reference
              </Link>
              <Link
                href="/docs/built-in-tools"
                className="rounded-lg border border-orange-600 px-6 py-3 text-base font-semibold text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Built-in Tools
              </Link>
              <Link
                href="/docs/plugin-api"
                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Plugin Development
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
