# JSSSPLC2021

## DyMMer Tool

The DyMMer tool is available at [dymmerufc.github.io](https://dymmerufc.github.io/).

## Datasets


| Dataset | Description | Size | Original Files |
|---------|-------------|------|----------------|
| [Original dataset](https://github.com/publiosilva/JSSSPLC2021/blob/master/datasets/full-dataset.csv) | This is the original (unclassified) dataset. | 342 | [Files](https://github.com/publiosilva/JSSSPLC2021/tree/master/feature-models)
| [Oliveira dataset](https://github.com/publiosilva/JSSSPLC2021/blob/master/datasets/oliveira-dataset.csv) | The Oliveira dataset contains the same feature models as the original dataset but classified using Oliveira's approach. We use this dataset in the training of machine learning algorithms. | 342 | [Files](https://github.com/publiosilva/JSSSPLC2021/tree/master/feature-models)
| [Silva dataset](https://github.com/publiosilva/JSSSPLC2021/blob/master/datasets/silva-dataset.csv) | The Oliveira dataset contains the same feature models as the original dataset but classified using Silva's approach. | 342 | [Files](https://github.com/publiosilva/JSSSPLC2021/tree/master/feature-models)
| [Dataset evaluated by SPL experts](https://github.com/publiosilva/JSSSPLC2021/blob/master/datasets/reduced-dataset.csv) | This dataset was manually evaluated by a group of 15 experts in SPL. | 50 | [Files](https://github.com/publiosilva/JSSSPLC2021/tree/master/expert-evaluation/feature-models)

## Notebooks

| Notebook | Description |
|----------|-------------|
| [Decision Tree](https://github.com/publiosilva/JSSSPLC2021/blob/master/notebooks/Decicion-Tree.ipynb) | Procedures for training the decision tree model are specified in this notebook. |
| [Logistic Regression](https://github.com/publiosilva/JSSSPLC2021/blob/master/notebooks/Logistic-Regression.ipynb) | Procedures for training the logistic regression model are specified in this notebook. |
| [Naive Bayes](https://github.com/publiosilva/JSSSPLC2021/blob/master/notebooks/Naive-Bayes.ipynb) | Procedures for training the Naive Bayes model are specified in this notebook. |
| [Cross Validation](https://github.com/publiosilva/JSSSPLC2021/blob/master/notebooks/K-fold.ipynb) | In this notebook, a 5-step cross-validation is performed for the 3 machine learning models. |
| [Independent Variables Selection](https://github.com/publiosilva/JSSSPLC2021/blob/master/notebooks/Feature-Selection.ipynb) | In this notebook, the procedures for selecting independent variables are specified. |

## Expert Answers for Feature Model Assessment

[Here](https://github.com/publiosilva/JSSSPLC2021/tree/master/expert-evaluation/answers) you can see expert answers for the feature model maintainability assessment.

## Refactoring Suggestions

[Here](https://github.com/publiosilva/JSSSPLC2021/tree/main/refactoring-suggestions) you can see all the feature model refactoring suggestions.

## Performance Measurement

[Here](https://github.com/publiosilva/JSSSPLC2021/tree/main/performance-measurement) you can see all all the artifacts used in the performance measurement.
