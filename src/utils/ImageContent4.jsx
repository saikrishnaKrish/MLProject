import './ImageContainerStyle.css'

const CausalLearningExplanation = () => {
  return (
    <div>
      <p><strong>The image you've provided illustrates a conceptual framework for understanding causal learning. Here’s a step-by-step explanation of the diagram:</strong></p>

      <ol>
        <li><strong>Observation and Causation:</strong>
          <ul>
            <li>The diagram starts with <span style={{ color: 'blue' }}>Observational data (effects) X</span> in blue, which represents the data that we can observe directly. This is typically what we gather from experiments, surveys, or real-world data collection.</li>
            <li>There are two types of causes shown: <span style={{ color: 'green' }}>Explicit causes Y</span> and <span style={{ color: 'green' }}>Latent causes E</span>. The explicit causes (Y) are known and can be directly observed or measured. The latent causes (E), shown in a separate bubble, are hidden or unobserved factors that can also influence the observational data.</li>
          </ul>
        </li>

        <li><strong>Causal Relationships:</strong>
          <ul>
            <li>Arrows from both <span style={{ color: 'green' }}>Explicit causes Y</span> and <span style={{ color: 'green' }}>Latent causes E</span> point towards <span style={{ color: 'blue' }}>Observational data X</span>, indicating that both explicit and latent causes influence the data we observe.</li>
          </ul>
        </li>

        <li><strong>Transformation into a Causal Model:</strong>
          <ul>
            <li>The diagram transitions from this initial understanding of causes and effects to a more structured causal model on the right side, connected by a large arrow. This suggests that our understanding of the causes will inform the construction of a causal model.</li>
          </ul>
        </li>

        <li><strong>Components of the Causal Model:</strong>
          <ul>
            <li>The causal model is made up of four components interconnected with arrows:
              <ul>
                <li><strong>Reasoner (P(Y | X, E)):</strong> This represents the probabilistic model that infers the explicit causes Y given the observational data X and latent causes E.</li>
                <li><strong>Explanatory Space (E):</strong> This is the space of all latent causes that can explain the variations in X beyond what is explained by Y.</li>
                <li><strong>Explainer (P(E | X)):</strong> This is the part of the model that attempts to infer the probabilities of latent causes given the observational data.</li>
                <li><strong>Producer (P(X | Y, E)):</strong> This component is responsible for generating (or predicting) the observational data X given the explicit causes Y and latent causes E.</li>
              </ul>
            </li>
          </ul>
        </li>

        <li><strong>Label and Observation Spaces:</strong>
          <ul>
            <li>The <span style={{ color: 'green' }}>Label space Y</span> and <span style={{ color: 'blue' }}>Observation space X</span> are the domains in which the explicit causes and observational data exist, respectively. These are the outputs and inputs of the model in terms of data representation.</li>
          </ul>
        </li>
      </ol>

      <p>In summary, the diagram depicts the transition from a raw understanding of causes and their effects to a sophisticated causal model that can reason about both observed and unobserved factors. It emphasizes the importance of considering both explicit and latent causes in causal inference and the use of probabilistic models to infer and predict outcomes. The notation (e.g., P(Y | X, E)) is indicative of conditional probabilities, a fundamental concept in statistics and machine learning for modeling the probability of an outcome given some other variables.</p>
    </div>
  );
}

export default CausalLearningExplanation;
