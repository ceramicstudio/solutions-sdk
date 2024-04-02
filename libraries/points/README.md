# Points library

## Installation

TODO

## Usage

### Single point vs multiple points per document

**Symbols**

🟢 built-in support  
🟡 supported by configuration or other APIs  
🟠 requires application logic  
🔴 implementation constraint

| Use case                       | Single point per document | Multiple points per document |
| ------------------------------ | ------------------------- | ---------------------------- |
| Allocate points                | 🔴 only 1 at a time       | 🟢 any number at a time      |
| Count all points for recipient | 🟢 built-in method        | 🟠 needs aggregation         |
| Count all points by issuer     | 🟡 use Ceramic API        | 🟠 needs custom logic        |
| Sourcing of points             | 🟡 use custom model       | 🟡 use custom model          |

## License

Dual licensed under MIT and Apache 2
